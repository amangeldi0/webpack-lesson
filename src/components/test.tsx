import React from 'react';
import Image from "@/assets/testImage.jpg";
import TestSvg from "@/assets/test.svg";
import cls from "@/config/App.module.scss";

export const Test = () => {
    return (
        <div data-testid="platform" >
            {__PLATFORM__}
            <img src={Image} alt=""/>
            <TestSvg className={cls.icon} height={500} width={500} />
        </div>
    );
};