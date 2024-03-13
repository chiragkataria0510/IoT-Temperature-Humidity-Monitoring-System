import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
export default function DeviceInfo(props) {

  var date = new Date(props.deviceInfo.lastSeenAt);
  var formattted_last_seen = date.toLocaleString()
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Paper sx={{padding:3}}>
       <table className="table table-striped  table-hover">
       <thead >
            <tr>
              <th>Parameter</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Device EUI</td>
              <td>{props.deviceInfo.devEUI}</td>
            </tr>
            <tr>
              <td>Device Name</td>
              <td>{props.deviceInfo.name}</td>
            </tr>
            <tr>
              <td>Last Seen</td>
              <td>{formattted_last_seen}</td>
            </tr>
            <tr>
              <td>Device Description</td>
              <td>{props.deviceInfo.description}</td>
            </tr>
            <tr>
              <td>Device Status Margin</td>
              <td>{props.deviceInfo.deviceStatusMargin}</td>
            </tr>
            <tr>
              <td>Device Status Battery</td>
              <td>{props.deviceInfo.deviceStatusBattery}</td>
            </tr>
            <tr>
              <td>Device SkipFCntCheck</td>
              <td>{props.deviceInfo.skipFCntCheck}</td>
            </tr>
            <tr>
              <td>Device Refrence Altitude</td>
              <td>{props.deviceInfo.referenceAltitude}</td>
            </tr>
            <tr>
              <td>Device Location</td>
              <td>{props.deviceInfo.location}</td>
            </tr>
          </tbody>
        </table></Paper>
      </Grid>
    </>
  );
}
