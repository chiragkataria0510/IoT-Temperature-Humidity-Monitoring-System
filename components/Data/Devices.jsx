import React, { useState, useEffect } from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
var _ = require("lodash");
export default function Devices() {
  const [Devices, setDevices] = useState({
    totalCount: null,
    result: null,
  });






  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ overflowX: 'scroll' }}
      >
        <table className="table table-striped  table-hover">
          <thead style={{ backgroundColor: '#34481F', fontSize: '1.3rem', color: '#fff' }}>
            <tr>
              <th>Device Name</th>
              <th>Device EUI Number</th>
            </tr>
          </thead>
          <tbody>
            <tr key="a8404151518379f9">
              
              <td>
                <Link href={`/device-info/a8404151518379f9`} style={{ color: 'black' }}><a>
                 Zone 1
                </a></Link>
              </td>
              <td>
                <Link href={`/device-info/a8404151518379f9`} style={{ color: 'black' }}><a>
                a8404151518379f9
                </a></Link>
              </td>
            </tr>

            <tr key="a8404181e18379fd">
             
              <td>
                <Link href={`/device-info/a8404181e18379fd`} style={{ color: 'black' }}><a>
                 Zone 2
                </a></Link>
              </td>
              <td>
                <Link href={`/device-info/a8404181e18379fd`} style={{ color: 'black' }}><a>
                a8404181e18379fd
                </a></Link>
              </td>
            </tr>
          </tbody>
        </table>

      </Grid>

    </>
  );
}
