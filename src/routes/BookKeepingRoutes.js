// Pages
import ServicePage from "pages/ServicePage";
import SubServicePage from "pages/SubServicePage";
import ServiceContextProvider from "../providers/ServiceContextProvider";
import SubServiceContextProvider from "../providers/SubServiceContextProvider";

// JSON Data imports
import BookKeepingServiceJsonData from "assets/data/ServicePage/BookKeepingService";
import BookKeepingServicesUpTo100EntriesSubServiceJsonData from "assets/data/SubServicePage/BookKeepingService/Providing Services Up to 100 Entries";

const BookKeepingRoutes = {
  name: "Book Keeping",
  route: "/services/book-keeping",
  component: (
    <ServiceContextProvider dict={{ name: "Book Keeping" }}>
      <ServicePage jsonData={BookKeepingServiceJsonData} />
    </ServiceContextProvider>
  ),
  collapse: [
    {
      name: "Providing Services Up to 100 Entries",
      route: "/services/book-keeping/services-up-to-100-entries",      component: (
        <SubServiceContextProvider
          dict={{ name: "Providing Services Up to 100 Entries", serviceName: "Book Keeping" }}
        >
          <SubServicePage jsonData={BookKeepingServicesUpTo100EntriesSubServiceJsonData} />
        </SubServiceContextProvider>
      ),
    },
  ],
};

export default BookKeepingRoutes;
