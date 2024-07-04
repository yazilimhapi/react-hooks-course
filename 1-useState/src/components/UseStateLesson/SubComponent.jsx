const SubComponent = ({ list, setList }) => {
  return <div>
    <button style={{background: 'orange', fontSize: 20}} onClick={() => setList([...list, 'Sub Item'])}>SubComponent Button</button>
  </div>;
};

export default SubComponent;
