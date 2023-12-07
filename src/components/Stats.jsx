

export const Stats = () => {
    const stats = [
        {
          id: "stats-1",
          title: "User Active",
          value: "3800+",
        },
        {
          id: "stats-2",
          title: "Trusted by Company",
          value: "230+",
        },
        {
          id: "stats-3",
          title: "Transaction",
          value: "$230M+",
        },
      ];
  return (
    <section className="px-5 lg:px-36 w-full max-w-[1400px] mx-auto ">
        <div className="flex flex-col justify-between sm:flex-row ">
            {stats.map((stat)=> {
                return (
                    <div key={stat.id} className="mt-3 md:flex items-center gap-5">
                        <h4 className="text-white font-semibold text-3xl">{stat.value}</h4>
                        <p className="text-gradient">{stat.title.toUpperCase()}</p>
                    </div>
                )
            })}
        </div>
    </section>
  )
}
