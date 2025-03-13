import React from "react";
import {
  Box,
  Grid,
  Flex,
  Text,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Custom Icon Component
const CustomIcon = ({ circleColor, bgColor }) => {
  return (
    <Box
      position="relative"
      width="50px"
      height="50px"
      bg={bgColor} // Background color
      borderRadius="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Outer Circle (Background Effect) */}
      <Box position="absolute" width="35px" height="35px" borderRadius="full" bg="rgba(255, 245, 235, 1)" />

      {/* Back Circle (Offset Effect) */}
      <Box position="absolute" width="22px" height="22px" borderRadius="full" bg={circleColor} left="14px" />

      {/* Front Circle (With White Border) */}
      <Box
        position="absolute"
        width="22px"
        height="22px"
        borderRadius="full"
        bg={circleColor}
        left="8px"
        border="2px solid white" // ✅ White border added
      />
    </Box>
  );
};

// Performance Data for Chart
const performanceData = [
  { name: "Mon", Opened: 60, Resolved: 40, Escalated: 10 },
  { name: "Tue", Opened: 100, Resolved: 60, Escalated: 15 },
  { name: "Wed", Opened: 70, Resolved: 50, Escalated: 20 },
  { name: "Thu", Opened: 80, Resolved: 60, Escalated: 10 },
  { name: "Fri", Opened: 90, Resolved: 70, Escalated: 15 },
];

// Agent Summary Data
const agents = [
  { name: "Kunle", resolved: 50, avgTime: "4 min", rating: 4.8 },
  { name: "Mercy", resolved: 45, avgTime: "5 min", rating: 4.5 },
  { name: "Damilola", resolved: 48, avgTime: "3 min", rating: 4.7 },
];

const Dashboard = () => {
  return (
    <Box p={5} bg="#F7F9FC">
      {/* Metrics Section */}
      <Grid templateColumns="repeat(5, 1fr)" gap={4} mb={6}>
        {[
          { label: "Open Ticket", value: 200, circleColor: "blue.500", bgColor: "blue.50" },
          { label: "In Progress", value: 150, circleColor: "yellow.500", bgColor: "yellow.50" },
          { label: "Pending Ticket", value: 50, circleColor: "orange.500", bgColor: "orange.50" },
          { label: "Resolved Ticket", value: 800, circleColor: "green.500", bgColor: "green.50" },
          { label: "Closed Ticket", value: 1150, circleColor: "green.800", bgColor: "green.100" },
        ].map((stat, index) => (
          <Flex key={index} p={4} bg="white" borderRadius="md" boxShadow="sm" align="center">
            <CustomIcon circleColor={stat.circleColor} bgColor={stat.bgColor} />
            <Box ml={3}>
              <Text fontSize="sm" color="gray.600">{stat.label}</Text>
              <Text fontSize="lg" fontWeight="bold" color="gray.900">{stat.value}</Text>
            </Box>
          </Flex>
        ))}
      </Grid>

      {/* Ticket Management Section */}
      <Box p={6} bg="white" borderRadius="md" boxShadow="md" mb={8}>
        <Text fontSize="lg" fontWeight="bold" mb={5} color="gray.900">Ticket Management</Text>

        {/* Table Header */}
        <Flex bg="gray.200" p={4} borderRadius="md" fontWeight="bold" color="gray.700">
          {["Ticket ID", "User Name", "Issue", "Priority", "Status", "Agent", "Created Date", "Last Updated", "Action"].map((header, i) => (
            <Text key={i} flex="1" textAlign="center" minW="120px">{header}</Text>
          ))}
        </Flex>

        {/* Table Rows */}
        {[
          { id: "#231246AB", name: "Catherine", issue: "Payment failure", priority: "Medium", status: "Open", statusColor: "blue.500", agent: "Kunle", created: "05/02/2025", updated: "05/02/2025" },
          { id: "#231246BC", name: "John", issue: "Login Issue", priority: "High", status: "Pending", statusColor: "orange.400", agent: "Mercy", created: "06/02/2025", updated: "06/02/2025" },
          { id: "#231246CD", name: "David", issue: "Refund Request", priority: "Low", status: "Open", statusColor: "blue.500", agent: "Damilola", created: "07/02/2025", updated: "07/02/2025" },
        ].map((ticket, index) => (
          <Flex key={index} py={4} px={5} borderBottom="1px solid" borderColor="gray.300" align="center" bg={index % 2 === 0 ? "white" : "gray.50"}>
            <Text flex="1" textAlign="center" minW="120px" color="gray.800">{ticket.id}</Text>
            <Text flex="1" textAlign="center" minW="120px" color="gray.800">{ticket.name}</Text>
            <Text flex="1" textAlign="center" minW="120px" color="gray.800">{ticket.issue}</Text>
            <Badge
                flex="1"
                textAlign="center"
                minW="120px"
                px={3}
                py={2}
                borderRadius="md"
                bg={ticket.priority === "High" ? "red.100" : ticket.priority === "Medium" ? "yellow.100" : "green.100"}
                color={ticket.priority === "High" ? "red.800" : ticket.priority === "Medium" ? "yellow.800" : "green.800"}
>
                  {ticket.priority}
              </Badge>

            <Text flex="1" textAlign="center" minW="120px" fontWeight="bold" color={ticket.statusColor}>{ticket.status}</Text>
            <Text flex="1" textAlign="center" minW="120px" color="gray.800">{ticket.agent}</Text>
            <Text flex="1" textAlign="center" minW="120px" color="gray.800">{ticket.created}</Text>
            <Text flex="1" textAlign="center" minW="120px" color="gray.800">{ticket.updated}</Text>
            <Flex flex="1" justify="center" minW="120px">
              <BsThreeDotsVertical color="black" />
            </Flex>
          </Flex>
        ))}
      </Box>

      {/* Performance Trend & Agent Summary */}
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {/* Performance Trend */}
        <Box p={5} bg="white" borderRadius="md" boxShadow="sm">
          <Text fontSize="lg" fontWeight="bold" mb={4} color="gray.900">Performance Trend</Text>
          <LineChart width={650} height={250} data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Opened" stroke="blue" strokeWidth={2} />
            <Line type="monotone" dataKey="Resolved" stroke="green" strokeWidth={2} />
            <Line type="monotone" dataKey="Escalated" stroke="red" strokeWidth={2} />
          </LineChart>
        </Box>

        {/* Agent Summary */}
        <Box p={5} bg="white" borderRadius="md" boxShadow="sm">
          <Text fontSize="lg" fontWeight="bold" mb={4} color="gray.900">Agent Summary</Text>

          {/* Table Header */}
          <Flex bg="gray.200" p={3} borderRadius="md" fontWeight="bold">
            {["Agent", "Resolved Tickets", "Avg. Response Time", "Rating"].map((header, i) => (
              <Text key={i} flex="1" textAlign="center" color="gray.700">{header}</Text>
            ))}
          </Flex>

          {/* Table Rows */}
          {agents.map((agent, index) => (
            <Flex key={index} py={3} px={4} borderBottom="1px solid" borderColor="gray.300" align="center" bg={index % 2 === 0 ? "white" : "gray.50"}>
              <Text flex="1" textAlign="center" fontWeight="medium" color="gray.800">{agent.name}</Text>
              <Text flex="1" textAlign="center" color="gray.800">{agent.resolved}</Text>
              <Text flex="1" textAlign="center" color="gray.800">{agent.avgTime}</Text>
              <HStack flex="1" justify="center">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < Math.floor(agent.rating) ? (
                    <AiFillStar key={i} color="gold" />
                  ) : (
                    <AiOutlineStar key={i} color="gold" />
                  )
                )}
                <Text fontWeight="bold" ml={1} color="gray.900">{agent.rating.toFixed(1)}</Text>
              </HStack>
            </Flex>
          ))}
        </Box>
      </Grid>
    </Box>
  );
};

export default Dashboard;
