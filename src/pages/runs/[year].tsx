import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Tab } from "@headlessui/react";
import Image from "next/image";

import yearData from "../../components/Years/yearData";

import Layout from "../../components/Layout";

interface YearProps {}

const classNames = (...classes: String[]) => {
  return classes.filter(Boolean).join(" ");
};

const Year: NextPage<YearProps> = () => {
  const router = useRouter();
  const { year } = router.query;

  const { description, beneficiaries, orgComm, projects } =
    yearData[String(year)];

  const tabs = ["Beneficiaries", "Projects", "Org Comm"];

  return (
    <Layout pageTitle={`${year} HeartCode Run`}>
      <div className="min-h-screen px-20 py-24 bg-milk">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-pink-400 sm:text-5xl sm:leading-none">
          <span className="relative px-1">
            <div className="absolute inset-x-0 bottom-0 h-2 transform -skew-x-12 bg-yellow-500" />
            <span className="relative inline-block">{year}</span>
          </span>{" "}
          HeartCode Run
        </h2>

        <div>
          <h3 className="font-bold text-lg pt-4 pb-8">{description}</h3>
        </div>

        <div className="w-full max px-2 mt-6 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex p-1 mx-auto space-x-1 bg-yellow-200 rounded-xl">
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-xl leading-5 font-bold text-yellow-500 rounded-lg",
                      "transition transform duration-200 ease-in-out",
                      selected
                        ? "bg-yellow-300 shadow text-yellow-700"
                        : "hover:bg-yellow-300 hover:text-yellow-700"
                    )
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-16">
              <Tab.Panel>
                <div className="grid gap-10 lg:grid-cols-2">
                  {beneficiaries.map((b, i) => (
                    <div key={`b.organisation_${i}`}>
                      <div className="grid sm:grid-cols-3">
                        <div className="relative w-full max-h-full sm:h-auto">
                          <Image
                            className="rounded-full"
                            src={`/${year}/${b.image}`}
                            width="250"
                            height="250"
                          />
                        </div>
                        <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                          <p className="text-xl font-bold pb-1">
                            {b.organisation}
                          </p>
                          <p className="mb-4 text-sm tracking-wide">
                            {b.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid gap-10 lg:grid-cols-3">
                  {projects.map((p, i) => (
                    <div key={`p.mentee_${i}`}>
                      <h3 className="text-xl font-black">{p.name}</h3>
                      <div className="relative w-full max-h-full sm:h-auto my-5">
                        <Image
                          src={`/${year}/${p.thumbnail}`}
                          width="500"
                          height="250"
                        />
                      </div>
                      <div className="flex flex-col font-bold text-md">
                        <h3>Mentee: {p.mentee}</h3>
                        <h3>Mentor: {p.mentor}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid gap-10 lg:grid-cols-3">
                  {orgComm.map((o, i) => (
                    <div key={`o.name_${i}`}>
                      <div className="flex flex-col font-bold text-md text-center">
                        <div className="rounded-full mb-6">
                        <Image
                          className="rounded-full"
                          src={`/${year}/${o.image}`}
                          height="250"
                          width="250"
                        />
                        </div>
                        <h3>{o.name}</h3>
                        <h3>{o.role}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </Layout>
  );
};

export default Year;

export async function getStaticPaths() {
  const paths = Object.keys(yearData).map((p) => ({ params: { year: p } }));
  return { paths, fallback: false };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
