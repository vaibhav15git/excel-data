import React from "react";
import "./DataTable.css";

const DataTable = () => {
  return (
    <div>
      <>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="mb-3">
                <h5 className="card-title fw-bold">User List</h5>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                <div>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target=".add-new"
                    className="btn btn-primary"
                  >
                    <i className="bx bx-plus me-1" /> Add New
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="">
                <div className="table-responsive">
                  <table className="table project-list-table table-nowrap align-middle table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Sr.No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Role</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col" style={{ width: 200 }}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <a href="#" className="text-body">
                            Simon Ryles
                          </a>
                        </td>
                        <td>
                          <span className="badge badge-soft-success mb-0">
                            Full Stack Developer
                          </span>
                        </td>
                        <td>SimonRyles@minible.com</td>
                        <td>125</td>
                        <td>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                                className="px-2 text-primary"
                              >
                                <i className="bx bx-pencil font-size-18" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                                className="px-2 text-danger"
                              >
                                <i className="bx bx-trash-alt font-size-18" />
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>

                        <td>
                          <a href="#" className="text-body">
                            Marion Walker
                          </a>
                        </td>
                        <td>
                          <span className="badge badge-soft-info mb-0">
                            Frontend Developer
                          </span>
                        </td>
                        <td>MarionWalker@minible.com</td>
                        <td>132</td>
                        <td>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                                className="px-2 text-primary"
                              >
                                <i className="bx bx-pencil font-size-18" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                                className="px-2 text-danger"
                              >
                                <i className="bx bx-trash-alt font-size-18" />
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* modal code here */}
        <div>
          <button
            
          >
            Launch static backdrop modal
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* modal code here */}
      </>
    </div>
  );
};

export default DataTable;
