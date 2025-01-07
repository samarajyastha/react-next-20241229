export default function Home() {
  return (
    // <div className="m-8 my-12 mx-24">
    //   <h1 className="p-4 py-8 text-blue-400 bg-red-800 text-center underline text-3xl font-bold hover:text-yellow-500 hover:bg-green-500">
    //     This is Home page
    //   </h1>

    //   <div className="max-h-full w-1/2  bg-green-300 hidden">hi</div>

    //   <div className="bg-slate-100 flex items-center h-52 justify-evenly absolute top-0 left-0">
    //     <p>Ram</p>
    //     <p>Sita</p>
    //     <p>Hari</p>
    //   </div>
    // </div>
    <div className="bg-white dark:bg-slate-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="bg-slate-700 dark:bg-slate-200 h-24 w-24 m-5"></div>
      <div className="bg-slate-700 dark:bg-slate-200 h-24 w-24 m-5"></div>
      <div className="bg-slate-700 dark:bg-slate-200 h-24 w-24 m-5"></div>
      <div className="bg-slate-700 dark:bg-slate-200 h-24 w-24 m-5"></div>
      <div className="bg-slate-700 dark:bg-slate-200 h-24 w-24 m-5"></div>
      <div className="bg-slate-700 dark:bg-slate-200 h-24 w-24 m-5"></div>
      <div className="bg-slate-700 dark:bg-slate-200 h-24 w-24 m-5"></div>
      <div className="bg-slate-700 dark:bg-slate-200 h-24 w-24 m-5"></div>
      <div className="bg-slate-700 dark:bg-slate-200 h-24 w-24 m-5"></div>
    </div>
  );
}

/**
 * Tailwind CSS
 * 1. Margin - m | Horizontal - x, Vertical - y | top - t, bottom -b, left - l, right - r
 * 2. Padding - p
 * 3. Width - w , min-, max-
 * 4. Height - h, min-, max-
 * 5. Color - text-[colorName]-fill
 * 6. Background - bg-
 * 7. Text
 * 8. Font
 * 9. Display - flex, grid, block, inline-block, inline, hidden
 * 10. Position - relative, absolute, fixed, sticky
 * 11. Responsive design - sm, md, lg, xl
 */
