import React, { useState } from 'react';
import Fields from './Fields';

import './App.css';

function App() {
  const [form, setForm] = useState([]);
  const [values, setValues] = useState({});
  const [data, setData] = useState([]);

  const handleAdd = (field) => {
    setForm(f => {
      let newState = [...f];
      newState.push(field);

      return newState;
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
    setData([...data, values]);
    // setValues({});
    // setForm([])
  }

  const renderField = field => {
    switch(field.type) {
      case 'string':
        return <div className="form-field" >
          <div>
            { field.label }
          </div>
          <div className='input'>
            <input type="text" onChange={e => setValues({...values, [field.fieldName]: e.target.value})} />
          </div>
        </div>;
      case 'boolean':
        return <div className="form-field" >
          <div>
            { field.label }
          </div>
          <div className='radio'>
            {
              field.options.map(s => <>
                <input
                  type="radio"
                  id={s.name}
                  name={field.fieldName}
                  value={s.name}
                  onChange={e => setValues({...values, [field.fieldName]: e.target.value})}
                />
                <label htmlFor={s.name}>{s.label}</label>
              </>)
            }
          </div>
        </div>;
      case 'list':
        return <div className="form-field" >
          <div>
            { field.label }
          </div>
          <div className='input'>
            <input
              list="countries"
              name={field.fieldName} 
              onChange={e => setValues({...values, [field.fieldName]: e.target.value})}
            />
            <datalist id="countries">
              {
                field.options.map(o => <option value={o.label} />)
              }
            </datalist>
          </div>
        </div>
      default:
        return '';
    }
  }

  return (
    <>
      <header>Create Dynamic Form</header>
      <div className="app">
        <div className="form-wrapper">
          <form>
            {
              form.length ? (
                <>
                  <div>
                    {
                      form.map(f => renderField(f))
                    }
                  </div>
                  <input type="submit" onClick={handleSubmit} />
                </>
              ) : (
                <div>Please select from the Toolbox</div>
              )
            }
          </form>
          {
            data.length > 0 ? (<>
              <hr />
              <h3>Submitted Data</h3>
              <table border='1'>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Country</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map(d => <tr>
                      <td>{ d.firstName }</td>
                      <td>{ d.lastName }</td>
                      <td>{ d.gender }</td>
                      <td>{ d.country }</td>
                    </tr>)
                  }
                </tbody>
              </table>
            </>) : ''
          }
          
        </div>
        <div className="toolbox-wrapper">
          <h3>Toolbox</h3>
          <div>
            {
              Fields.map(field => <div className="field" key={field.fieldName}>
                <span>{field.label}</span>
                <span onClick={() => handleAdd(field)}>+</span>
              </div>)
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
