import React from 'react'
import "./Suggestions.css"
import {Avatar} from "@mui/material";

function Suggestions() {
  return (
    <div className='suggestions'>
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">


        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Kim Namjoon_94</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>

        </div>

        
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Kim Seokjin_04</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>

        </div>

        
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Min Yoongi_93</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>

        </div>

        
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Jung Ho-seok_94</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>

        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Park Jimin_95</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>

        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Kim Taehyung_95</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>

        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Jeon Jungkook_97</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>

        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Cha Eunwoo_97</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>

        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Ji Changwook_87</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>

        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Lee Jongsuk_89</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>

        </div>
      </div>
      
    </div>
  )
}

export default Suggestions
