<template>
    <div class="z-0 w-auto h-full relative text-justify">
        <div id="#" class="mx-16 lg:mx-[104px] pb-16">
            <div class="relative">
                <img class="hidden lg:inline absolute scale-75 right-0 -top-16" src="../assets/flower.svg" alt="">
                <img class="lg:hidden absolute scale-75 -right-16 -bottom-20" src="../assets/flower.svg" alt="">
                <Carousel />
            </div>
            <div class="lg:mx-20">
                <h1 class="py-5">
                    ITS MUN CLUB
                </h1>
                <p><span class="font-bold">The Institut Teknologi Sepuluh Nopember Model United Nations Club (abbreviated ITS MUN Club)</span> is a student organization led by dedicated undergraduates who have a keen interest in international relations and diplomacy.</p><br>
                <div class="lg:flex lg:flex-row">
                    <img class="mx-auto" src="../assets/what-we-do.svg" alt=""><br>
                    <div class="lg:flex lg:flex-col">
                        <p><strong>Our mission</strong> is to raise awareness of global issues and enhance the soft skills of ITS students through various initiatives, such as Model United Nations (MUN) simulations, participation in international and national conferences, mentoring programs, and high-quality workshops.</p><br>
                        <p>These programs are conducted regularly due to the requirement of exceptional leadership skills in MUN conferences. The list of these programs are included below:</p>
                    </div>
                </div>
    
            </div>
            <!-- <h6 class="font-bold">Accomplishments</h6><br>
            <p>Recognized as one of Indonesia's prominent MUN communities, ITS MUN Club always encourage its members in reaching their maximum potential by sending delegations to either national or international level MUNs, creating a competitive culture and building its credibility with increasing numbers of awards each year. Below, you can find a list of our noteworthy accomplishments that highlight the achievements of the ITS MUN Club:</p><br>
            <div class="mx-auto pb-10">
                <img class="w-full" src="../assets/mun-map.svg" alt="">
            </div> -->
        </div>
        <div class="w-full bg-dark-bg dark:bg-light-bg flex flex-col lg:flex-row pb-8 lg:pb-0">
            <img class="pb-6 lg:pb-0 object-cover" src="../assets/aboutus-1.svg" alt="">
            <div class="lg:pr-10 lg:pl-[44px] mx-16 lg:ml-[88px] lg:mr-36 lg:py-6">
                <h3 class="underline h3-inverse">General Training</h3>
                <p class="p-inverse">General Training is a weekly training held exclusively for ITS MUN Club Members to improve the necessary skills in the MUN competition. The General Training includes different topics each week, which are, but not limited to:</p>
                <ul class="list-disc ul-inverse">
                    <li>Writing and Research: Writing a Position Paper</li>
                    <li>Speaking: General Speakers' List</li>
                    <li>Debate: Moderated and Unmoderated Caucus</li>
                </ul>
            </div>
        </div>
        <div class="w-full dark:bg-dark-bg bg-light-bg flex flex-col lg:flex-row pb-8 lg:pb-0">
            <img class="pb-6 lg:hidden" src="../assets/aboutus-2.svg" alt="">
            <div class="lg:pl-10 lg:pr-[44px] mx-16 lg:mx-36 lg:py-6">
                <h3 class="underline">Joint Simulation</h3>
                <p>
                    Joint Simulation is an MUN competition simulation held with MUN organizations outside the ITS campus. Joint Simulation will allow the participants to network with fellow MUN enjoyer from other campus. <br><br>Previously, we’ve held a Joint Simulation with various organizations, which are: Airlangga MUN Community and UPNVJT MUN.
                </p>
            </div>
            <img class="hidden lg:inline object-cover" src="../assets/aboutus-2.svg" alt="">
        </div>
        <div class="w-full bg-dark-bg dark:bg-light-bg flex flex-col lg:flex-row pb-8 lg:pb-0">
            <img class="pb-6 lg:pb-0 object-cover" src="../assets/aboutus-3.svg" alt="">
            <div class="lg:pr-10 lg:pl-[44px] mx-16 lg:ml-[88px] lg:mr-36 lg:py-6">
                <h3 class="underline h3-inverse">General Assembly </h3>
                <p class="p-inverse">General Assembly is a university-level MUN competition simulation, which means, as long as you’re an ITS student, you are free to join our General Assembly! <br><br>Test your MUN skills (speaking, writing, debating, negotiating, critical thinking, etc.) here and network with fellow ITS students with the same interest in global issues!</p>
            </div>
        </div>
        <div class="w-full dark:bg-dark-bg bg-light-bg flex flex-col lg:flex-row pb-16 lg:pb-0">
            <img class="pb-6 lg:hidden" src="../assets/aboutus-2.svg" alt="">
            <div class="lg:pl-10 lg:pr-[44px] mx-16 lg:mx-36 lg:py-6">
                <h3 class="underline">Club Bonding</h3>
                <p>
                    Not only activities that can boost your MUN skills, we also have a club bonding! In club bonding, we will gather all ITS MUN Club members and do fun activities such as games and watching movies! <br><br>Build your connection here and have some fun!
                </p>
            </div>
            <img class="hidden lg:inline object-cover" src="../assets/aboutus-2.svg" alt="">
        </div>
        <div class="mx-16 lg:mx-44">
            <img class="pb-6" src="../assets/accomplishment.svg" alt="">
            <p class="">
                Recognized as one of Indonesia's prominent MUN communities, ITS MUN Club always encourage its members in reaching their maximum potential by sending delegations to either national or international level MUNs, creating a competitive culture and building its credibility with increasing numbers of awards each year. Below, you can find a list of our noteworthy accomplishments that highlight the achievements of the ITS MUN Club:
            </p>
        </div>
        <div class="lg:ml-12">
            <img class="pt-8 w-full" src="../assets/mun-map.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    layout: 'default3',
}
</script>