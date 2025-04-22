import { useEffect, useState } from "react";
import { MENU_APIs } from "./constant";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            const data = await fetch(MENU_APIs+ resId);
            const json = await data.json();
            setResInfo(json.data);
        };
        fetchMenu();
    }, [resId]);

    
    return resInfo;
}

export default useRestaurantMenu;