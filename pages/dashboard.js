import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
//= Layout
import MainLayout from "../layouts/Main";
//= Components
import { RiseLoader } from "react-spinners";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";

const Home = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [records, setRecords] = useState([]);
  const [balance, setBalance] = useState(null)
  const router = useRouter();

  useEffect(() => {
    if (session) {
      const formData = {
        cusEmail: session.user.email,
      };
      setIsLoading(true);
      axios
        .post(`api/dashboard`, formData)
        .then((x) => {
          setIsLoading(false);
          // console.log("x>> ", x.data);
          setBalance(x.data.balance)
          setRecords(x.data.result);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log("Something went wrong!!", err);
        });
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>Edit Pro - Dashboard</title>
      </Head>

      <MainLayout>
        <main className="portfolio-page style-1">
          <div className="container">
            <h5 className="mt-3 mb-2">My account:</h5>
            <div className="bg-light border rounded-3 shadow-sm p-3 col-sm-6 col-md-4">
              <p>Balance:</p>
              <h4>{balance} Credits</h4>
              <Link
                className="btn btn-danger px-2 py-1 btn-sm rounded-3 mt-3"
                href="/pricing"
              >
                Buy Credit
              </Link>
            </div>

            <h5 className="my-3">Usage Details:</h5>
            {records.length >= 1 ? (
              <table className="table table-striped table-hover">
                <thead>
                  <tr className="text-center">
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Transaction(credits)</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((item, index) => {
                    return (
                      <tr className="text-center" key={index}>
                        <td>
                          {new Date(item.created_at).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            }
                          )}
                        </td>
                        <td>
                          {new Date(item.created_at).toLocaleTimeString(
                            "en-US",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            }
                          )}
                        </td>
                        <td className="text-danger">-{item.credit}</td>
                        <td>{item.info}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <>
                <h6 className="text-center text-muted mb-3">-- No Data --</h6>
              </>
            )}
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default Home;

//Fetch The sessions before render
//UseEffects is not work in that way
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        premanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
