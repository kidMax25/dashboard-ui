
import React, {useEffect, useRef } from "react";
import {
  CardContent,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import data from "@/data/analytics";

const AnalyticsChart = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle> Analytics for this Year</CardTitle>
          <CardDescription> Views Per Month</CardDescription>
          <CardContent>
            <div style={{ width: "100%", height: 300 }}>
              
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </>
  );
};

export default AnalyticsChart;
