"use client";

import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import { useEffect, useState } from "react";
import logo from '../../assets/logo.png'
import Image from "next/image";

const Loading = () =>
{
    const [value, setValue] = useState(0);

    useEffect(() => 
    {
        const handleIncrement = (prev) => 
        {
            if (prev === 100)
                return 0;
            return prev + 10;
        };
    
        setValue(handleIncrement);
        const interval = setInterval(() => setValue(handleIncrement), 2000);
    
        return () => clearInterval(interval);
    }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-[100vw] bg-black h-[100vh] flex justify-center items-center text-white">
        <AnimatedCircularProgressBar
        max={100}
        min={0}
        value={value}
        gaugePrimaryColor="red"
        gaugeSecondaryColor="grey"/>
    </div>
  );
}

export default Loading
