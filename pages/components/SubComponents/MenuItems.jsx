export default function MenuItems(props) {
  return (
    <>
      <a href="#" className="inline-flex items-center  ">
        {props.menuIcons}

        <span className="text-sm">{props.menutitle}</span>
      </a>
    </>
  );
}
