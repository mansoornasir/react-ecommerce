import React from 'react'

const Home = () => {
    return (
        <div>
            <ul id="list">
                <li>Java</li>
                <li>C++</li>
                <li>Python</li>
                <li style={{color: "blue"}}>Javascript</li>
                <li className="yellow">Ruby</li>
            </ul>

            <lable htmlfor="checkbox">Java</lable><input type="checkbox" name="checkbox" id="checkbox"/>

            <select id="dropdown">
                <option>Item 1</option>
                <option>Item 2</option>
                <option>Item 3</option>
                <option>Item 4</option>
                <option value="5">Item 5</option>
            </select>

        </div>
    )
}

export default Home