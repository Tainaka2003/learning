import React from "react";
import './style.css'

// const Form = () => {
//     return(
//         <div className={"form"}>
//             <h1 className={"mainLabel"}>
//                 Закажите Лучших Друзей прямо сейчас
//             </h1>
//             <form action="">
//                 <label htmlFor="name" className={"label"}>
//                     Ты кто?
//                 </label>
//                 <input type="text" name="name" className={"input"}/>
//                 <label htmlFor="name" className={"label"}>
//                     Ты крутой?
//                 </label>
//                 <input type="text" name="name" className={"input"}/>
//                 <label htmlFor="name" className={"label"}>
//                     Хочешь с нами?
//                 </label>
//                 <input type="text" name="name" className={"input"}/>
//                 <input type="submit" name="name" className={"button"}/>
//             </form>
//         </div>
//     )
// }

// const Form =() => <div>Тут был твой текст</div>

// const Form =() => (
//     <div>Тут был твой текст
//         <div>Тут был твой текст
//             <div>Тут был твой текст
//                 <div>Тут был твой текст
//                     <div>Тут был твой текст
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// )

// export default () => (
//     <div>Тут был твой текст</div>
// );

export default (props) => (
    <div className={"mainLabel"} style={{FontSize: '70px', textAlign: "center", fontWeight: 700}}>
        <h3>Car name: {props.name}</h3>
        <p className={"label"} style={{FontSize: '50px', textAlign: "center", fontWeight: 700, margin: '0 auto'}}>Year: <strong>{props.year}</strong></p>
    </div>

);

// export default Form;
