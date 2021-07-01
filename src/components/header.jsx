import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
    return (
        <div>
            {props.title}
            Header Component!!
            {console.log("this is from console log")}
        </div>
    )
}

Header.defaultProps = {
    title: "yo"
}

Header.prototype = {
    title: PropTypes.string
}
