import React from 'react';
import './styles.scss';

const data = require('./data.json');

function Menu() {
  return (
    <nav className='menu'>
      <ul className='menu__container'>
        <li className='menu__item_active material-icons-round md-2rem'>person</li>
        <li className='menu__item material-icons md-2rem'>call</li>
        <li className='menu__item material-icons-round md-2rem'>rate_review</li>
        <li className='menu__item material-icons-round md-2rem'>work</li>
        <li className='menu__item material-icons md-2rem'>visibility</li>
      </ul>
      <div className='menu__download material-icons-round md-2p5rem'>cloud_download</div>
    </nav>
  )
}

function Person() {
  return (
    <div className='person'>
      <div className='person__info'>
        <div className='person__name'>Kaylen Ward</div>
        <div className='person__profession'>Model</div>
        <div className='person__social'>vk inst twit</div>
      </div>
      <img  className='person__avatar' src='/src/images/avatar.jpg' alt='avatar' />
    </div>
  )
}

function SiteContentLeft() {
  return (
    <div className='col-lg-6 p-0 overflow-hidden site__left'>
      <div className='site__head'>
        <Menu/>
        <Person/>
      </div>
    </div>
  )
}

function AboutMe(props) {
  return (
    <React.Fragment>
      <div className='about-me__list'>
        <div className='about-me__item'>{data['about me'].list['1']}</div>
        <div className='about-me__item'>{data['about me'].list['2']}</div>
        <div className='about-me__item'>{data['about me'].list['3']}</div>
      </div>
      <p className='about-me__description'>{data['about me'].decription}</p>
    </React.Fragment>
  )
}

function Page(props) {
  return (
    <div className='page'>
      {props.title ? <div className='page__title'>{props.title}</div> : null}
      <div className='page__content'>{props.children}</div>
    </div>
  )
}

const SiteContentRight = (props) => (
    <div className='col-lg-6 p-0 overflow-hidden site__right' onClick={(e) => props.onClick(e)}>
      <div className='site__page'>
        <div className='site__page-wrapper'>
          <div className='scroll-box' tabIndex='0'>
            <div className='page-container'>
              <div className='page-container__header'>Обо мне</div>
              <Page>
                <AboutMe></AboutMe>
              </Page>
              <Page title='Мой навыки'>
                <div>{data['text-fish']}</div>
              </Page>
              <Page title='Мой навыки'>
                <div>{data['text-fish']}</div>
              </Page>
              <Page title='Мой навыки'>
                <div>{data['text-fish']}</div>
              </Page>
              <Page title='Мой навыки'>
                <div>{data['text-fish']}</div>
              </Page>
            </div>
            <div className='scroll'></div>
          </div>
        </div>
      </div>
  </div>
);


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('click true', e.target);
  }

  render() {
    return (
      <div className='site'>
        <div className='site__wapper overflow-hidden'>
          <div className='container height-100'>
            <div className='row height-100'>
              <SiteContentLeft/>
              <SiteContentRight onClick={this.handleClick}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}