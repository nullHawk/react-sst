import React, { useEffect } from "react";

function Categories(){
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch().then(
            (res)=>{
                return res.json();
            }
        ).then((res)=>{
            console.log(res);
        })
    },[])
    return (
        <div>
            {categories.map((item) => {
                <div>
                    <div key={item.id}>{item.nam}</div>
                </div>
            })
            }
        </div>
    )
}

export default Categories;