import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style/addmeal.css";
import { useNavigate } from 'react-router-dom';

const Addmeal = () => {
    const [meal, setMeal] = useState({
        title: ""
        , description: "",
        category: "",
        image: ""
    })
    const [errers, setErrors] = useState({
        title: ""
        , description: "",
        last: ""
    })
    const [ImageUrl, setImageUrl] = useState("")
    const navigation = useNavigate();

    const uploadImage = async (Image) => {
        const data = new FormData();
        data.append("file", Image);
        data.append("upload_preset", "reactRestaurant");
        data.append("cloud_name", "dxbvwgxvf");

        try {
            // geting this like was hell like experains
            const res = await axios.post("https://api.cloudinary.com/v1_1/dxbvwgxvf/image/upload", data)
            console.log(res.data.url);
            setImageUrl(res.data.url)
            console.log(ImageUrl);
        } catch (error) {
            console.log(error)
        }
    }



    const handeleChange = (e) => {
        const { name, value, files } = e.target
        // console.log(value);
        if (name === "image") {
            setMeal({ ...meal, [name]: files[0] })
            uploadImage(files[0])
        }
        else if (name == "title" && value.length < 8) {
            setErrors({ errers, title: "please enter somthing rea" })
            setMeal({...meal, title:""})
        }
        else if (name == "description" && value.length < 25) {
            setErrors({ errers, description: "please write some real discreption" })
            setMeal({...meal, description:""})
        }
        else {
            setErrors({ errers, title: "", description: ""})
            setMeal({ ...meal, [name]: value })
        }
    }

    const Addmeal = async (e) => {
        e.preventDefault();
        if (meal.title == "" || meal.category == "" || meal.image == "" || meal.description == "") {
            setErrors({ errers, last: "please validate all the inputs" })
        }
        else {
            setErrors({ errers, title: "", description: "", category: "", last: "" })
            try {
                const response = await axios.post("http://localhost:8000/meals",{
                    ...meal,image:ImageUrl
                })
                setMeal({ meal, title: "", description: "", category: "", image: "" })
                setImageUrl("");
                navigation('/');
            } catch (error) {
                console.log(error);
            }
        }
    }
    console.log(meal)
    
    return (
        <>
            <div>
                <h1 className='title text-center py-10'>Add Meal</h1>
                <div className='flex flex-col items-center justify-center p-6 sm:p-10 bg-gray-400 w-11/12 sm:w-4/5 m-auto rounded-2xl'>
                    <form action="" className='w-full sm:w-3/5 flex flex-col'>
                        <div className='flex flex-col sm:flex-row justify-between items-center my-6'>
                            <label htmlFor="title" className='label text-xl sm:text-2xl lg:text-3xl Rochester'>Title</label>
                            <input type="text" name="title" id="title" className='border-2 border-gray-300 rounded-md w-full sm:w-2/3 lg:w-3/4 h-10 px-2 input mt-2 sm:mt-0' onChange={handeleChange} />
                        </div>
                        <p className='errors'>{errers.title}</p>
                        <div className='flex flex-col sm:flex-row justify-between items-center my-6'>
                            <label htmlFor="description" className='label text-xl sm:text-2xl lg:text-3xl Rochester'>Description</label>
                            <input type="text" name="description" id="description" className='border-2 border-gray-300 rounded-md w-full sm:w-2/3 lg:w-3/4 h-10 px-2 input mt-2 sm:mt-0' onChange={handeleChange} />
                        </div>
                        <p className='errors'>{errers.description}</p>
                        <div className='flex flex-col sm:flex-row justify-between items-center my-6'>
                            <label htmlFor="image" className='label text-xl sm:text-2xl lg:text-3xl Rochester'>Image</label>
                            <input type="file" name="image" id="image" className='border-2 border-gray-300 rounded-md w-full sm:w-2/3 lg:w-3/4 h-10 px-2 input mt-2 sm:mt-0' onChange={handeleChange} />
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between items-center my-6'>
                            <label htmlFor="category" className='label text-xl sm:text-2xl lg:text-3xl Rochester'>Category</label>
                            <select name="category" id="category" onChange={handeleChange} className="border-2 border-gray-300 rounded-md w-full sm:w-2/3 lg:w-3/4 h-10 px-2 input mt-2 sm:mt-0">
                            <option ></option>
                            <option value="breakfast">breakfast</option>
                            <option value="launch">launch</option>
                            <option value="dinner">dinner</option>
                            </select>
                        </div>
                        <p className='errors'>{errers.category}</p>
                        <button type="button" className="text-white bg-blue-800 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-4" onClick={Addmeal} to="/">Add</button>
                        <p className='errors'>{errers.last}</p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Addmeal;
