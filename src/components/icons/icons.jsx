export const StarIcon = ({ width = 24, height = 24, color = "white" }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      id="iconContext-star-inline"
      viewBox="0 0 24 24"
      fill={color}
      role="presentation"
    >
      <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
    </svg>
  );
};

export const PlusIcon = ({ width = 24, height = 24, color = "white" }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      id="iconContext-watchlist"
      viewBox="0 0 24 24"
      fill={color}
      role="presentation"
    >
      <path
        d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const ArrowIcon = ({
  width = 24,
  height = 24,
  color = "white",
  style,
}) => {
  return (
    <svg
      style={style}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      id="iconContext-arrow-drop-down"
      viewBox="0 0 24 24"
      fill={color}
      role="presentation"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
    </svg>
  );
};

export const TrashIcon = ({
  width = 24,
  height = 24,
  color = "white"
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 16 16"
    >
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
      <path
        fillRule="evenodd"
        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
      />
    </svg>
  );
};
