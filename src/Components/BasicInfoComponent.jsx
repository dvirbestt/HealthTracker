import React from 'react';

function BasicInfoComponent(props) {
    return (
        <div className={"mt-5 p-5 flex gap-5 w-full justify-center"}>
            <div>Your Height:{props.basicInfo?.height}</div>
            <div>Your Starting Weight: {props.basicInfo?.startingWeight}</div>
            <div>Your Target Weight: {props.basicInfo?.targetWeight}</div>
        </div>
    );
}

export default BasicInfoComponent;