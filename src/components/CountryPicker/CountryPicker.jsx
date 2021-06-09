import React , {useState,useEffect} from 'react';
import {fetchCountries} from '../../api'
import {Select , FormControl,MenuItem,InputLabel} from '@material-ui/core'
import styles from './CountryPicker.module.css'
const CountryPicker = ({onChangeCountryHandler}) => {
const [countries,setCountries]= useState([])
    useEffect(()=> {

const fetchApi = async() => {
    setCountries(await fetchCountries())
}

fetchApi()
    },[setCountries])

    return (
            <FormControl  className={styles.formControl}>
                <InputLabel id="simple">Global Analytics</InputLabel>
                <Select labelId ="simple" defaultValue="" onChange={(e) => onChangeCountryHandler(e.target.value)}>

                    <MenuItem value="">Global</MenuItem>
                    {countries.map((country) => {
                        return <MenuItem  key={country} value={country}>{country}</MenuItem>
                    })}
                </Select>
            </FormControl>
    )
}


export default CountryPicker