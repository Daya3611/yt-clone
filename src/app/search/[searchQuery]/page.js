import SearchVideoResult from "@/components/SearchVideoResult";


export default function SearchPage({ params }) {
  const { searchQuery } = params;
  return <SearchVideoResult searchQuery={searchQuery} />;
}
