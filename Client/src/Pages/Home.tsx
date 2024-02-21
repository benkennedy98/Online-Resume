import './Home.css';
export const Home = () => {
  const iconPath = process.env.PUBLIC_URL + '/icons/';

  return (
    <div className="page-container">
      <div className="title-container">
        <div className="title">Welcome!</div>
      </div>
      <div className="icon-container">
        <img className="icon" src={`${iconPath}react.svg`} alt="" />
        <img className="icon" src={`${iconPath}typescript.svg`} alt="" />
        <img className="icon" src={`${iconPath}auth0.svg`} alt="" />
        <img className="icon" src={`${iconPath}css.svg`} alt="" />
      </div>
      <div className="body-container">
        <div className="body">
          This React Typescript application is here to display my skills and knowledge as a
          developer. I am using a long list of technologies and packages to create the website you
          see before you. The first being React, this project started out as a simple create react
          app that I have been working on in my free time to keep my skills fresh and sharp.
        </div>
        <div className="body">
          I am using Typescript as it is a simple tool that helps prevent bugs and keeps project
          development running smoothly. I am using a free auth tool called Auth 0 to handle
          authentication and it was a really simple process to get setup. I used a series on linked
          in learning to get me pointed in a good direction and then a series of stack overflow
          posts to work through a bug I ran into during inital startup. Using CSS I have created
          colors and added a font to create a uniform look across all pages. It might not be the
          most beautiful app you have ever seen but it fits my taste well.
        </div>
      </div>
    </div>
  );
};
