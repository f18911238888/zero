import React from "react";

const NetworkHelpText: React.FC = () => (
	<div
		tabIndex={0}
		className="collapse collapse-arrow w-full border border-base-300 bg-base-200"
	>
		<input type="checkbox" />
		<div className="collapse-title">Network Help</div>
		<div className="collapse-content" style={{ width: "100%" }}>
			<div className="grid grid-cols-3 gap-5 ">
				<div className="space-y-5 leading-normal">
					<div>
						<section>
							<b>Network ID</b>
							<p className="text-gray-400">
								The networks globally unique 16-digit ID. This cannot currently be
								changed.
							</p>
						</section>
					</div>
					<div>
						<section>
							<b>Network Name</b>
							<p className="text-gray-400">
								A user-defined short name for this network that is visible to members. We
								recommend using something like a domain name (e.g. zerotier.com) or e-mail
								address.
							</p>
						</section>
					</div>
					{/* <div>
            <section>
              <b>Description</b>
              <br />A longer description of this network.
            </section>
          </div> */}
					<div>
						<section>
							<b>Access Control</b>
							<p className="text-gray-400">
								How is membership controlled? This should be left on its default setting
								unless you want to create a totally open network for testing, gaming, etc.
							</p>
						</section>
					</div>

					<div className="space-y-5 leading-normal">
						<section>
							<b>Multicast Recipient Limit</b>
							<p className="text-gray-400">
								The maximum number of recipients that can receive an Ethernet multicast or
								broadcast. If the number of recipients exceeds this limit, a random subset
								will receive the announcement. Setting this higher makes multicasts more
								reliable on large networks at the expense of bandwidth.
							</p>
							<p className="text-gray-400">
								Setting to <b>0</b> disables multicast, but be aware that only IPv6 with
								NDP emulation (RFC4193 or 6PLANE addressing modes) or other unicast-only
								protocols will work without multicast.
							</p>
						</section>
					</div>
				</div>
				<div className="space-y-5">
					<div className="leading-normal">
						<section>
							<b>Managed Routes</b>

							<p className="text-gray-400">
								IPv4 routes to be published to network members. This can be used to create
								routes to other networks via gateways on a ZeroTier network. Note that for
								security reasons most clients will not use default routes or routes that
								overlap with public IP address space unless this is specifically allowed
								by the user. Public IP ranges are marked with an icon:
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 496 512"
									className="orange pl2 ml-2 inline"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Allow Global</title>
									<path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm160 215.5v6.93c0 5.87-3.32 11.24-8.57 13.86l-15.39 7.7a15.485 15.485 0 0 1-15.53-.97l-18.21-12.14a15.52 15.52 0 0 0-13.5-1.81l-2.65.88c-9.7 3.23-13.66 14.79-7.99 23.3l13.24 19.86c2.87 4.31 7.71 6.9 12.89 6.9h8.21c8.56 0 15.5 6.94 15.5 15.5v11.34c0 3.35-1.09 6.62-3.1 9.3l-18.74 24.98c-1.42 1.9-2.39 4.1-2.83 6.43l-4.3 22.83c-.62 3.29-2.29 6.29-4.76 8.56a159.608 159.608 0 0 0-25 29.16l-13.03 19.55a27.756 27.756 0 0 1-23.09 12.36c-10.51 0-20.12-5.94-24.82-15.34a78.902 78.902 0 0 1-8.33-35.29V367.5c0-8.56-6.94-15.5-15.5-15.5h-25.88c-14.49 0-28.38-5.76-38.63-16a54.659 54.659 0 0 1-16-38.63v-14.06c0-17.19 8.1-33.38 21.85-43.7l27.58-20.69a54.663 54.663 0 0 1 32.78-10.93h.89c8.48 0 16.85 1.97 24.43 5.77l14.72 7.36c3.68 1.84 7.93 2.14 11.83.84l47.31-15.77c6.33-2.11 10.6-8.03 10.6-14.7 0-8.56-6.94-15.5-15.5-15.5h-10.09c-4.11 0-8.05-1.63-10.96-4.54l-6.92-6.92a15.493 15.493 0 0 0-10.96-4.54H199.5c-8.56 0-15.5-6.94-15.5-15.5v-4.4c0-7.11 4.84-13.31 11.74-15.04l14.45-3.61c3.74-.94 7-3.23 9.14-6.44l8.08-12.11c2.87-4.31 7.71-6.9 12.89-6.9h24.21c8.56 0 15.5-6.94 15.5-15.5v-21.7C359.23 71.63 422.86 131.02 441.93 208H423.5c-8.56 0-15.5 6.94-15.5 15.5z"></path>
								</svg>
							</p>
						</section>
						{/* Add other sections */}
					</div>
					<div className="leading-normal">
						<section>
							<b>IPv4 Auto-Assign</b>
							<p className="text-gray-400">
								IPv4 range from which to auto-assign IPs. Note that IPs will only be
								assigned if they also fall within a defined route. Easy mode allows users
								to pick an IP range and a route and pool definition will automatically be
								created.
							</p>
						</section>
						{/* Add other sections */}
					</div>
				</div>
				<div className="space-y-5 leading-normal">
					<section id="#dns-help">
						<b>DNS Push</b>
						<section>
							<p className="text-gray-400">Requires ZeroTier version 1.6</p>
							<p className="text-gray-400">
								Older versions of ZeroTier will ignore these settings
							</p>
							<p className="text-gray-400">
								On macOS, iOS, Windows, and Android, ZeroTier can automatically add DNS
								servers for a specific domain. It does not set up or host a DNS server.
								You must host your own.
							</p>
							<p className="text-gray-400">
								If you configure <span className="link">zt.example.com</span> as your
								search domain, and <span className="link">10.147.20.1</span> as a server
								address, then your computer will ask{" "}
								<span className="link">10.147.20.1</span> to look up IP addresses for
								hostnames ending in <span className="link">zt.example.com</span>
							</p>
							<p className="text-gray-400">
								This must be enabled on each client with the allowDNS option. There is a
								checkbox in the UI in each networks details, near the Allow Managed
								checkbox.
							</p>
						</section>
					</section>
				</div>
			</div>
		</div>
	</div>
);

export default NetworkHelpText;
