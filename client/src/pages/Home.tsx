import MainSection from "../sections/MainSection/MainSection";
import { PrimaryContainer } from "../mui/PrimaryContainer";
type Props = {};

const Home = (props: Props) => {
  return (
    <PrimaryContainer className={`grid jcs aic g30`}>
      <MainSection />
    </PrimaryContainer>
  );
};
export default Home;
