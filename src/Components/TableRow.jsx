import React from 'react';

function TableRow(props) {

    function BMI(height,weight){
        return (weight / Math.pow(height/100 ,2)).toFixed(2)
    }

    function BMR(age,weight, height,gender) {
        if (gender === "Male"){
            return 5 + (weight * 10) + (height * 6.25) - (age*5)
        }else {
            return -161 + (weight * 10) + (height * 6.25) - (age*5)
        }
    }

    const getColor = (height,weight) => {
        const bmi = BMI(height,weight)
        if (bmi > 35){
            return "bg-red"
        }else if(bmi > 25 && bmi < 35) {
            return "bg-orange"
        }else if(bmi >= 20 && bmi <25 ){
            return "bg-green"
        }else {
            return "bg-blue"
        }
    }

    return (
        <>
            {props?.list?.map((mileStone,i)=> (
                <tr key={i} className={`${ getColor(props.basicInfo.height,mileStone.weight)} border-b-2 border-black`}>
                    <td>{mileStone.weight}</td>
                    <td>{BMI(props.basicInfo.height,mileStone.weight)}</td>
                    <td>{BMR(mileStone.age,mileStone.weight,props.basicInfo.height,props.basicInfo.gender)}</td>
                    <td>{mileStone.date}</td>
                </tr>
            ))}
        </>
    );
}

export default TableRow;