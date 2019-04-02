import React from 'react'
import AuthViewManeger from './AuthView/AuthViewManeger'

export const HomeView = () => (
    <div className="home-container">
        <div className="container">
            <h1>öğretmenler için<br />başlangıç noktası!</h1>
            <AuthViewManeger />
        </div>
    </div>

)

export default HomeView
