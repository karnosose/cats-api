import React from "react";
import {Link, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import uuid from 'react-uuid';

import {setCategories} from "../../store/actions/catActions";
import {SidebarStyles} from './Sidebar.style'

function Sidebar (props) {

    const {id} = useParams();

    return (
        <SidebarStyles.SidebarWrapper>
            <SidebarStyles.CategoryList>
                {props.categories && props.categories.map(category => (
                    <Link
                        to={`/${category.id}`}
                        style={{textDecoration: 'none', color: 'grey'}}
                        key={uuid()}
                        className={(id == category.id ? ' active-category' : '')}
                    >
                        <SidebarStyles.CategoryItem >
                            {category.name}

                        </SidebarStyles.CategoryItem>
                    </Link>
                ))}
            </SidebarStyles.CategoryList>
        </SidebarStyles.SidebarWrapper>
    )
};

const mapStateToProps = state => ({
    categories: state.categories.categories
})

const mapDispatchToProps = dispatch => ({
        setCategories: data => dispatch(setCategories(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);