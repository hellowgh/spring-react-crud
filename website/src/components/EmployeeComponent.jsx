import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createEmployee, getEmployeeById, updateEmployee } from '../service/employeeService.js';
import { Button } from 'antd';

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateEmployee = async (e) => {
    e.preventDefault();

    const employee = { firstName, lastName, email };

    if (id) {
      await updateEmployee(id, employee);
    } else {
      await createEmployee(employee);
      navigate('/employees');
    }
  };

  useEffect(() => {

    if (id) {
      getEmployeeById(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      }).catch(error => {
        console.log(error);
      });
    }

  }, [id]);

  const pageTitle = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Button onClick={goBack} type={'primary'}>Back</Button>
      <br/><br/>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {
              pageTitle()
            }
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> First Name :</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  >
                  </input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Last Name :</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  >
                  </input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Email Id :</label>
                  <input
                    type="email"
                    placeholder="Enter email Id"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  >
                  </input>
                </div>

                <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                {/* <Link to="/employees" className="btn btn-danger"> Cancel </Link> */}
              </form>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default EmployeeComponent;