import React from 'react';


function HomePageComponent(props) {
    return (
        <div className={"flex w-full justify-center gap-1"}>
            {/* eslint-disable-next-line react/prop-types */}<div>Hello:</div>  <div>{props?.name}</div>
        </div>
    );
}

export default HomePageComponent;
