import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import uuid from 'react-uuid';

import {AppStyles} from './App.style'
import {setCategories, setCatsList, setCatsByCategory} from "../../store/actions/catActions";
import {useParams} from "react-router-dom";

function App(props) {

    const [page, setPage] = useState(1);
    const {id} = useParams()

    useEffect(_ => {
        if(!id){
            fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}`)
                .then(res => res.json())
                .then(res => props.setCatsList(res, id))
        } else {
            fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id} `)
                .then(res => res.json())
                .then(res => props.setCatsByCategory(res, id))
        }

    }, [page, id]);

    const handleLoadMoreClick = _ => {
        setPage(page + 1)
    }

    return (
        <AppStyles.AppContainer>
            <AppStyles.ImagesContainer>
                {(!id && props.cats )&& props.cats.map(catsLists => (
                    catsLists.map(cat => (
                        <img
                            key={uuid()}
                            src={cat.url}
                            height={'200'}
                            className='cat-images'
                        />
                    ))
                ))}

                {id && props.catsByCategory && props.catsByCategory.map(catsLists => (
                    catsLists.map(cat => (
                        <img
                            key={uuid()}
                            src={cat.url}
                            height={'200'}
                            className='cat-images'
                        />
                    ))
                ))}
            </AppStyles.ImagesContainer>
            {id ? (
                <AppStyles.LoadMore onClick={handleLoadMoreClick}>
                    Load more
                </AppStyles.LoadMore>
            ) : (
                <AppStyles.LoadMore onClick={handleLoadMoreClick}>
                    Load more
                </AppStyles.LoadMore>
            )}

        </AppStyles.AppContainer>
    );
};

const mapStateToProps = state => (
    {
        cats: state.cats.catsList,
        catsByCategory: state.cats.catsByCategory
    }
)

const mapDispatchToProps = dispatch => {
    return {
        setCatsList: (data, id) => dispatch(setCatsList(data, id)),
        setCategories: data => dispatch(setCategories(data)),
        setCatsByCategory: (data, id) => dispatch(setCatsByCategory(data, id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
