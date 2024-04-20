import React from 'react'
import styles from './create.module.css'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import axios from 'axios'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Controller } from 'react-hook-form';
import { InputLabel } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
const schema = z.object({
  title: z.string().min(3, { message: "Title is required" }),
  description: z.string().min(5, { message: "Description is required" }),
  startDate: z.string().transform((value) => new Date(value)),
  endDate: z.string().transform((value) => new Date(value)),
  phase: z.string().nonempty({ message: 'Phase is required' }),
})
function create() {
  const { register, handleSubmit, control, reset , formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data) => {

    const userData = sessionStorage.getItem('user');
    let token = null;
    if (userData !== null) {
        let temp = JSON.parse(userData);
        token = temp.token
    }
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://student.syncstaging.com/users/create',
      headers: {
        'Content-Type': 'application/json',
        'access-token': `${token}`
    },
      data: data
    };

    const fethUsers = async () => {
      try {
        const res = await axios.request(config);
        reset();
        toast.success("Success " + `${res.data.message}`)
      } catch (error) {
        toast.error("Error " + `${error}`)
      }
    }

    fethUsers();
  };
  return (
    <>
      <div className={`contianer ${styles.secBg}`}>
        <div className="row pb-5 pt-3">
          <div className="col-lg-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row d-flex justify-content-center">
                <div className="col-md-12 pt-3">
                  <TextField id="title" label="Title" variant="outlined" className='w-100'
                    {...register('title')} />
                  {errors.title && <p className='text-danger'>{errors.title.message} </p>}

                </div>
                <div className="col-md-12 pt-3">
                  <Controller
                    name="startDate"
                    control={control}
                    rules={{ required: 'Start Date is required' }}  // Add this
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <>

                        <InputLabel>
                          Start Date
                        </InputLabel>
                        <TextField
                          id="startDate"
                          type='date'
                          variant="outlined"
                          className='w-100'
                          value={value}
                          onChange={(date) => onChange(date)}
                          renderInput={(params) => <TextField {...params} error={error} helperText={error?.message} />} // display error message
                        />
                      </>
                    )}
                  />
                  {errors.startDate && <p className='text-danger'>{errors.startDate.message} </p>}

                </div>
                <div className="col-md-12 pt-3">
                  <Controller
                    name="endDate"
                    control={control}
                    rules={{ required: 'Start Date is required' }}  // Add this
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <>

                        <InputLabel>
                          End Date
                        </InputLabel>
                        <TextField
                          id="endDate"
                          type='date'
                          variant="outlined"
                          className='w-100'
                          value={value}
                          onChange={(date) => onChange(date)}
                          renderInput={(params) => <TextField {...params} error={error} helperText={error?.message} />} // display error message
                        />
                      </>

                    )}
                  />
                  {errors.endDate && <p className='text-danger'>{errors.endDate.message} </p>}

                </div>

            
                <div className="col-md-12 pt-3">

                  <InputLabel id="Phase">Phase</InputLabel>
                  <Select
                    id="phase" labelId="Phase" variant="outlined" type="password" className='w-100'
                    {...register('phase')}
                  >
                    <MenuItem value={"design"}>Design</MenuItem>
                    <MenuItem value={"development"}>Development</MenuItem>
                    <MenuItem value={"testing"}>Testing</MenuItem>
                    <MenuItem value={"deployment"}>Deployment</MenuItem>
                    <MenuItem value={"complete"}>Complete</MenuItem>

                  </Select>
                  {errors.phase && <p className='text-danger'>{errors.phase.message} </p>}
                </div>
                <div className="col-md-12 pt-3">
                  <TextField id="description" label="Description" variant="outlined" className='w-100'
                    {...register('description')} />
                  {errors.description && <p className='text-danger'>{errors.description.message} </p>}
                </div>
                <div className="col-md-12 d-flex justify-content-center pt-2">
                  <Button variant="contained" type="submit" className='w-100 p-2' >Create</Button>
                </div>
              

              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default create