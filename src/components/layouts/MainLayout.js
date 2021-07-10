import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {MainStyles} from "./Mainlayout.style";
import {setCategories} from '../../store/actions/catActions'
import Sidebar from '../Sidebar'

function MainLayout (props) {

    const {id} = useParams();

    useEffect(_ => {
        fetch('https://api.thecatapi.com/v1/categories')
            .then(res => res.json())
            .then(res => props.setCategories(res))
    })

    return (
        <MainStyles.MainContainer>
            <Sidebar />
            {props.children}
        </MainStyles.MainContainer>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setCategories: data => dispatch(setCategories(data)),
    }
}

export default connect(null, mapDispatchToProps)(MainLayout);