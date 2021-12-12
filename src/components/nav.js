import React from "react"

export default ({items}) => <ul className="nav flex-column">
{items.map( (item, index) => 
    <li key={index} className="nav-item">
        <a href={item.link} className="nav-link" title={item.title} target={item.external === 'true' ? '_blank' : '_self'}>{item.title}</a>
    </li>
)}
</ul>