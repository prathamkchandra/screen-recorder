import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
     <main className="sign-in">

  <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="SnapChat Logo"
              width={40}
              height={40}
            />
            <h1>ScreenCast</h1>
          </Link>
          <p>
            Create and share your very first <span>ScreenCast video</span> in no
            time!
          </p>

          <button
            // onClick={async () => {
            //   return await authClient.signIn.social({
            //     provider: "google",
            //   });
            // }}
          >
            <Image
              src="/assets/icons/google.svg"
              alt="Google Icon"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />

      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="SnapChat Logo"
            width={32}
            height={32}
          />
          <h1>ScreenCast</h1>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="Star Icon"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
            ScreenCast makes screen recording easy, it&apos;s fast, smooth, and shareable in seconds
            </p>
            <article>
              <Image
                src="/assets/images/alex.png"
                alt="Jason"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h2>Alex Rivera</h2>
                <p>Product Engineer, Infotech</p>
              </div>
            </article>
          </section>
        </div>
        <p>© Screencast 2025</p>
      </aside>





      </main>
  )
}

export default page