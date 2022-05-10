import React, { useState, createContext, useReducer } from 'react';
import axios from 'axios';
import { API_URL } from '../config'

export const WorkContext = createContext(null);

const initialState = {
  works: [
    // { "id": 0, "name": "Savy / React Website", "image": { "url": "https://images.ctfassets.net/cggsnbtxpwpk/2Xb0FRp1NupD7xFn3rAkcR/49d028ce967bd57d04a9779f6dab2dc2/savy.png", "alt": "Savy" }, "coreTechnology": ["React", "Redux", "Google Maps", "Material UI"], "youtubeIframe": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/iC0U4olxsSI\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>", "description": "Savy is a website to provides information about Recycling.\nI was mainly working on the front-end part of the Waste Management page. I implemented interactive UI with material UI and Google Maps API.\nRedux is adopted for state management.", "githubUrl": "https://github.com/TOMO-YOSHI/savy" }
  ]
}

const workReducer = (state, action) => {
  switch (action.type) {
    case 'GET_WORKS':
      return {
        ...state,
        works: action.payload.works
      }
    case 'STORE_WORKS':
      return {
        ...state,
        works: action.payload.works
      }
    // case 'ADD_WORK':
    //   return {
    //     ...state,
    //     works: [
    //       ...state.works, action.payload
    //     ]
    //   }
    // case 'DELETE_WORK':
    //   const updatedWorksList = state.works.filter(work => work.id !== action.payload.id);
    //   return {
    //     ...state,
    //     works: [...updatedWorksList]
    //   }
    default:
      return state;
  }
}

export const WorkProvider = (props) => {
  const [state, dispatch] = useReducer(workReducer, initialState);

  const getWorks = async () => {
    const apiConfig = {
      method: 'GET',
      url: `${API_URL}/api/works`
    };

    try {
      const res = await axios(apiConfig);
      const works = res.data;

      dispatch({
        type: 'GET_WORKS',
        payload: { works }
      });
    } catch(err) {
      console.log(err)
    }
  }

  const storeWorks = (works: any): void => {
    dispatch({
      type: 'STORE_WORKS',
      payload: { works }
    });
  }

  // const addMovie = async ({ name, price }) => {
  //   const { id } = await fetch(`${API_URL}/api/movies`, {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ name, price })
  //   })
  //     .then(response => response.json())
  //     .then(response => response)
  //     .catch(error => console.log(error))

  //   // console.log(id)

  //   dispatch({
  //     type: 'ADD_MOVIE',
  //     payload: { name, price, id }
  //   })
  // }

  // const deleteMovie = async ({ id }) => {
  //   await fetch(`${API_URL}/api/movies`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ id })
  //   })
  //     .then(response => response.json())
  //     .then(response => response)
  //     .catch(error => console.log(error))

  //   dispatch({
  //     type: 'DELETE_MOVIE',
  //     payload: { id }
  //   })
  // }

  // const value = { state, dispatch, getWorks, addWork, deleteWork }
  const value = {
    state,
    dispatch,
    storeWorks
  }

  return (
    <WorkContext.Provider value={value}>
      {props.children}
    </WorkContext.Provider>
  );
}
