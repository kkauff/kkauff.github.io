"use client";

import { useState, useEffect } from "react";
import Fade from "@mui/material/Fade";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { content } from "./content";

export default function TimelineSection() {
  const [visible, setVisible] = useState(false);
  const items = [...content.timeline].reverse();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Timeline position="right" sx={{ padding: 0, margin: 0 }}>
      {items.map((item, i) => (
        <Fade
          key={i}
          in={visible}
          timeout={600}
          style={{ transitionDelay: `${i * 120}ms` }}
        >
          <TimelineItem>
          <TimelineOppositeContent
            sx={{
              color: "var(--muted)",
              fontSize: "0.875rem",
              fontWeight: 500,
              flex: 0.25,
              paddingLeft: 0,
              paddingTop: "6px",
            }}
          >
            {item.when}
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot
              sx={{
                backgroundColor: "var(--accent)",
                borderColor: "var(--background)",
                boxShadow: "none",
                margin: "6px 0",
              }}
            />
            {i < items.length - 1 && (
              <TimelineConnector sx={{ backgroundColor: "var(--subtle)" }} />
            )}
          </TimelineSeparator>

          <TimelineContent sx={{ paddingRight: 0, paddingBottom: "20px" }}>
            <p
              style={{
                color: "var(--foreground)",
                fontWeight: 600,
                fontSize: "1.125rem",
                margin: 0,
              }}
            >
              {item.what}
            </p>
            {item.link && (
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.875rem",
                  marginTop: "4px",
                  marginBottom: 0,
                }}
              >
                Currently building the{" "}
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--link)" }}
                  className="hover:underline"
                >
                  {item.link.label}
                </a>
              </p>
            )}
          </TimelineContent>
        </TimelineItem>
        </Fade>
      ))}
    </Timeline>
  );
}
