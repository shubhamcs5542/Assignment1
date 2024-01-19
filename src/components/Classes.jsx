import React,{useEffect,useState} from 'react'

const Classes = () => {
const[classData,setClassData]= useState([]);
useEffect(()=>{
const fetchData = async ()=>{
    try{
const response= await fetch('https://github.com/metapercept/CodeExcercise/blob/master/Excercise-1/data/class.json')

const  data = await response.json();

setClassData(data.classes);
catch(error){
    console.log("Error fetching data")
}
    }
};
},[])

  return (
    <>
    <div>
      <h3>Classes</h3>
    </div>

    <div style={{display:'flex', flexWrap:'wrap'}}>
    {
        Classes.map((cls.Id) = (
            <div key={index} style={cardStyle}>
                <img src={cls.image} alt={cls.title} style={imageStyle} />
                <h3>{cls.title}</h3>
                <p>{cls.description}</p>
                <button style={buttonStyle}>View </button>
            </div>
        ))
    }

    </div>
    </>
  )
}

fetch('https://github.com/metapercept/CodeExcercise/blob/master/Excercise-1/data/class.json')
    

export default Classes
