import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CharacterContextProvider } from '../context/character.context.jsx';
import HomePage  from '../Pages/home.page.jsx';
import CharacterSelectionPage from '../Pages/character-selection.page.jsx';
import BattlePage from '../Pages/battle.page.jsx';
import WinnerPage from '../Pages/winner.page.jsx';
import LoserPage from '../Pages/loser.page.jsx';

export default function RouterManager(){
    return (
        <CharacterContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/home" element={ <HomePage /> } />
                    <Route path="/character-selection" element={ <CharacterSelectionPage /> } />
                    <Route path="/battle" element={ <BattlePage /> } />
                    <Route path="/winner" element={ <WinnerPage/> } />
                    <Route path="/loser" element={ <LoserPage /> } />
                </Routes>
            </BrowserRouter>
        </CharacterContextProvider>
    )
}