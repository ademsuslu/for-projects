import React from "react";
import Chart from "react-apexcharts";

export default function Contacts() {
  return (
    <div className="Contacts">
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-xl-12">
            <Chart
              type="bar"
              width={"100%"}
              height={"500"}
              series={[
                {
                  name: "Müşteri Takip Programı",
                  data: [1000, 1150, 1400, 1550, 1600, 1750, 1800],
                },
              ]}
              options={{
                title: { text: "Clouboard", style: { fontSize: 30 } },
                colors: ["#FF4069"],
                xaxis: {
                  categories: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                  ],
                  title: {
                    text: "Müşteri Takip Programı  Mounts",
                    // style:{color:"black"} şeklinde eklenebilir Fontsize
                  },
                },
              }}
            ></Chart>
          </div>
        </div>
      </div>
    </div>
  );
}
