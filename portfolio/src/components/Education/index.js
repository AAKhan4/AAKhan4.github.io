import React from "react";
import * as E from "./EduComponents";
import Card from "../EduCards/Card"
import { Education } from "../../data/Info";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot"

export default function EducationDisplay() {
    return (
        <E.Container id="education">
          <E.Wrapper>
            <E.Title>Education</E.Title>
            <E.Desc>Chronological timeline highlighting my educational background.</E.Desc>
            <E.TimeLineContainer>
              <Timeline>
                {Education.map((edu, index) => (
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot variant="outlined" color="secondary" />
                      {index !== Education.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Card education={edu} />
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </E.TimeLineContainer>
          </E.Wrapper>
        </E.Container>
      );
}
