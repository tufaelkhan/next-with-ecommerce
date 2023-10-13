import zod from "zod"

const envSchema = zod.object({
    DATABASE_URL: zod.string().nonempty(),
    GOOGEL_CLIENT_ID: zod.string().nonempty(),
    GOOGEL_CLIENT_SECRET: zod.string().nonempty(),
    NEXTAUTH_URL: zod.string().nonempty(),
    NEXTAUTH_SECRET: zod.string().nonempty(),
})