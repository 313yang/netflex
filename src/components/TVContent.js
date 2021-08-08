const TVContent = ({ topRated, popular, airingToday, error, isLoading }) => {
  return (
    <>
      {airingToday.map((tv) => (
        <h1>{tv.name}</h1>
      ))}
      {topRated.map((tv) => (
        <h1>{tv.name}</h1>
      ))}
      {popular.map((tv) => (
        <h1>{tv.name}</h1>
      ))}
    </>
  );
};
export default TVContent;
