import './Header.css';

const Header = ({offset, appHeight}) => {
  const menuItems = [{
    title: "Главная",
    link: "main",
    active: offset >= 0 && offset < appHeight
  }, {
    title: "Наши преимущества",
    link: "advantages",
    active: offset >= appHeight && offset < appHeight * 2
  }, {
    title: "Курсы",
    link: "courses",
    active: offset >= appHeight * 2 && offset < appHeight * 3
  }, {
    title: "Свяжитесь с нами",
    link: "contact",
    active: offset >= appHeight * 3 && offset < appHeight * 4
  }]

  return (
    <header className="header">
      <div className={"header-wrapper"}>
        {
          menuItems.map((i) => {
            return (
              <div key={i.title} className={`header-item ${i.active ? 'active' : ''}`}>
                <a href={`#${i.link}`}>
                  <span>{i.title}<span className={'underline'}/></span>
                </a>
              </div>
            )
          })
        }
      </div>
    </header>
  );
}

export default Header;
