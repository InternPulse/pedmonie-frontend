import CombinedCharts from "../components/HomeSection/CombinedCharts";
import Container from "../components/HomeSection/Container";
import Summary from "../components/SummarySection/Summary";

export default function Home() {
  return (
    <Container>
      <Summary />
      <CombinedCharts />
    </Container>
  );
}
