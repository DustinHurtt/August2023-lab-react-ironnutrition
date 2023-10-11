import { Divider, Input } from "antd";

function SearchForm({ setSearch }) {


    const handleChange = (e) => {
        setSearch(e.target.value)
    }



  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input name="search" value={undefined} type="text" onChange={handleChange} />
    </>
  );
}

export default SearchForm;